import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from "react";
import Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";
import { Circle, Group, Layer, Line, Rect, Stage, Text } from "react-konva";
import Palette from "../components/layout-studio/Palette";
import StudioToolbar from "../components/layout-studio/StudioToolbar";
import {
  GRID_SIZE,
  LAYOUT_ITEM_BY_TYPE,
  SCALE_LABEL,
  type LayoutItem,
  type LayoutItemType,
  isLayoutItemType
} from "../components/layout-studio/types";

type StageSize = {
  width: number;
  height: number;
};

type RoomRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const STORAGE_KEY = "topline-layout-studio-v1";

const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const createItemId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const getRoomRect = ({ width, height }: StageSize): RoomRect => {
  const horizontalMargin = width < 900 ? 24 : 36;
  const verticalMargin = 26;
  const roomWidth = Math.max(280, width - horizontalMargin * 2);
  const roomHeight = Math.max(320, height - verticalMargin * 2);

  return {
    x: (width - roomWidth) / 2,
    y: (height - roomHeight) / 2,
    width: roomWidth,
    height: roomHeight
  };
};

const restoreItems = (): LayoutItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (entry): entry is LayoutItem =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as LayoutItem).id === "string" &&
        isLayoutItemType((entry as LayoutItem).type) &&
        typeof (entry as LayoutItem).x === "number" &&
        typeof (entry as LayoutItem).y === "number" &&
        typeof (entry as LayoutItem).rotation === "number"
    );
  } catch {
    return [];
  }
};

function CanvasGlyph({ type }: { type: LayoutItemType }) {
  const stroke = "#1b5bd6";
  const commonStroke = {
    stroke,
    strokeWidth: 1.7,
    lineCap: "round" as const,
    lineJoin: "round" as const
  };

  switch (type) {
    case "dental-chair":
      return (
        <>
          <Rect x={-16} y={-8} width={24} height={12} cornerRadius={3} {...commonStroke} />
          <Rect x={-2} y={-18} width={18} height={10} cornerRadius={3} {...commonStroke} />
          <Line points={[-16, 5, -16, 10]} {...commonStroke} />
          <Line points={[8, 5, 8, 10]} {...commonStroke} />
        </>
      );
    case "dentist-stool":
      return (
        <>
          <Circle x={0} y={-10} radius={5} {...commonStroke} />
          <Line points={[0, -5, 0, 4]} {...commonStroke} />
          <Line points={[-8, 4, 8, 4]} {...commonStroke} />
          <Line points={[-4, 4, -8, 9]} {...commonStroke} />
          <Line points={[4, 4, 8, 9]} {...commonStroke} />
        </>
      );
    case "assistant-stool":
      return (
        <>
          <Circle x={0} y={-10} radius={4.5} {...commonStroke} />
          <Line points={[0, -5, 0, 4]} {...commonStroke} />
          <Line points={[-7, 4, 7, 4]} {...commonStroke} />
          <Line points={[-3, 4, -7, 9]} {...commonStroke} />
          <Line points={[3, 4, 7, 9]} {...commonStroke} />
          <Line points={[-10, -10, -6, -10]} {...commonStroke} />
        </>
      );
    case "cabinet":
      return (
        <>
          <Rect x={-16} y={-16} width={32} height={24} cornerRadius={3} {...commonStroke} />
          <Line points={[0, -16, 0, 8]} {...commonStroke} />
          <Circle x={-4} y={-6} radius={0.9} fill={stroke} />
          <Circle x={4} y={-6} radius={0.9} fill={stroke} />
          <Circle x={-4} y={2} radius={0.9} fill={stroke} />
          <Circle x={4} y={2} radius={0.9} fill={stroke} />
        </>
      );
    case "sink":
      return (
        <>
          <Rect x={-15} y={-8} width={30} height={16} cornerRadius={5} {...commonStroke} />
          <Line points={[-6, -8, -6, -13]} {...commonStroke} />
          <Line points={[-6, -13, 5, -13]} {...commonStroke} />
          <Circle x={0} y={0} radius={2} {...commonStroke} />
        </>
      );
    case "sterilizer":
      return (
        <>
          <Rect x={-15} y={-15} width={30} height={24} cornerRadius={4} {...commonStroke} />
          <Circle x={0} y={-4} radius={6} {...commonStroke} />
          <Line points={[-8, 7, 8, 7]} {...commonStroke} />
        </>
      );
    case "xray-imaging":
      return (
        <>
          <Line points={[-16, -6, -6, -6, -6, 5, -16, 5]} {...commonStroke} />
          <Line points={[-6, -1, -2, -1]} {...commonStroke} />
          <Rect x={1} y={-14} width={14} height={24} cornerRadius={2.5} {...commonStroke} />
          <Line points={[3, -8, 11, -8]} {...commonStroke} />
          <Line points={[3, -2, 11, -2]} {...commonStroke} />
          <Line points={[3, 4, 9, 4]} {...commonStroke} />
        </>
      );
    case "pc-workstation":
      return (
        <>
          <Rect x={-16} y={-14} width={32} height={20} cornerRadius={3} {...commonStroke} />
          <Rect x={-9} y={-9} width={12} height={8} cornerRadius={1.5} {...commonStroke} />
          <Line points={[-3, 6, -3, 12]} {...commonStroke} />
          <Line points={[-8, 12, 4, 12]} {...commonStroke} />
        </>
      );
    case "reception-desk":
      return (
        <>
          <Line points={[-16, -10, 10, -10, 16, -4, 16, 8, -16, 8, -16, -10]} {...commonStroke} />
          <Line points={[-4, 1, 6, 1]} {...commonStroke} />
        </>
      );
    default:
      return null;
  }
}

export default function LayoutStudio() {
  const stageRef = useRef<Konva.Stage | null>(null);
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);

  const [items, setItems] = useState<LayoutItem[]>(() => restoreItems());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [armedType, setArmedType] = useState<LayoutItemType | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [stageSize, setStageSize] = useState<StageSize>({ width: 1040, height: 680 });

  const roomRect = useMemo(() => getRoomRect(stageSize), [stageSize]);

  const fitToRoom = useCallback(
    (itemType: LayoutItemType, x: number, y: number) => {
      const definition = LAYOUT_ITEM_BY_TYPE[itemType];
      const halfWidth = definition.footprint.width / 2;
      const halfHeight = definition.footprint.height / 2;

      return {
        x: clamp(snapToGrid(x), roomRect.x + halfWidth, roomRect.x + roomRect.width - halfWidth),
        y: clamp(snapToGrid(y), roomRect.y + halfHeight, roomRect.y + roomRect.height - halfHeight)
      };
    },
    [roomRect]
  );

  const addItem = useCallback(
    (type: LayoutItemType, x: number, y: number) => {
      const nextPosition = fitToRoom(type, x, y);
      const nextItem: LayoutItem = {
        id: createItemId(),
        type,
        x: nextPosition.x,
        y: nextPosition.y,
        rotation: 0
      };

      setItems((previous) => [...previous, nextItem]);
      setSelectedId(nextItem.id);
      setArmedType(null);
    },
    [fitToRoom]
  );

  const removeItem = useCallback((id: string) => {
    setItems((previous) => previous.filter((item) => item.id !== id));
    setSelectedId((previous) => (previous === id ? null : previous));
  }, []);

  const rotateItem = useCallback((id: string) => {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              rotation: (item.rotation + 90) % 360
            }
          : item
      )
    );
  }, []);

  const duplicateItem = useCallback(
    (id: string) => {
      const sourceItem = items.find((item) => item.id === id);
      if (!sourceItem) {
        return;
      }

      const duplicatedId = createItemId();
      const nextPosition = fitToRoom(sourceItem.type, sourceItem.x + GRID_SIZE, sourceItem.y + GRID_SIZE);

      setItems((previous) => [
        ...previous,
        {
          ...sourceItem,
          id: duplicatedId,
          x: nextPosition.x,
          y: nextPosition.y
        }
      ]);
      setSelectedId(duplicatedId);
    },
    [fitToRoom, items]
  );

  const onCanvasDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rawType = event.dataTransfer.getData("application/x-layout-item");

    if (!isLayoutItemType(rawType)) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    addItem(rawType, event.clientX - bounds.left, event.clientY - bounds.top);
  };

  const onStagePointerDown = (
    event: KonvaEventObject<MouseEvent | TouchEvent | PointerEvent>
  ) => {
    const stage = event.target.getStage();
    if (!stage) {
      return;
    }

    const pointer = stage.getPointerPosition();
    if (!pointer) {
      return;
    }

    const isCanvasSurface = event.target === stage || event.target.hasName("room-surface");

    if (armedType && isCanvasSurface) {
      addItem(armedType, pointer.x, pointer.y);
      return;
    }

    if (isCanvasSurface) {
      setSelectedId(null);
      setArmedType(null);
    }
  };

  const exportJson = () => {
    const payload = JSON.stringify(items, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "clinic-layout.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const exportPng = () => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const uri = stage.toDataURL({ pixelRatio: 2 });
    const anchor = document.createElement("a");
    anchor.href = uri;
    anchor.download = "clinic-layout.png";
    anchor.click();
  };

  const resetLayout = () => {
    setItems([]);
    setSelectedId(null);
    setArmedType(null);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const wrapper = canvasWrapRef.current;
    if (!wrapper) {
      return;
    }

    const updateSize = () => {
      setStageSize({
        width: Math.max(320, Math.round(wrapper.clientWidth)),
        height: Math.max(460, Math.round(wrapper.clientHeight))
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedId) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "d") {
        event.preventDefault();
        duplicateItem(selectedId);
        return;
      }

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        rotateItem(selectedId);
        return;
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        event.preventDefault();
        removeItem(selectedId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [duplicateItem, removeItem, rotateItem, selectedId]);

  const gridLines = useMemo(() => {
    const lines: Array<{ points: number[]; key: string }> = [];

    for (let x = roomRect.x; x <= roomRect.x + roomRect.width; x += GRID_SIZE) {
      lines.push({
        key: `v-${x}`,
        points: [x, roomRect.y, x, roomRect.y + roomRect.height]
      });
    }

    for (let y = roomRect.y; y <= roomRect.y + roomRect.height; y += GRID_SIZE) {
      lines.push({
        key: `h-${y}`,
        points: [roomRect.x, y, roomRect.x + roomRect.width, y]
      });
    }

    return lines;
  }, [roomRect]);

  return (
    <section className="section layout-studio-section">
      <div className="layout-studio-shell">
        <StudioToolbar
          hasSelection={Boolean(selectedId)}
          onReset={resetLayout}
          onExportPng={exportPng}
          onExportJson={exportJson}
        />

        <div className="layout-studio-workspace">
          <Palette
            armedType={armedType}
            onArmTool={(type) => setArmedType((previous) => (previous === type ? null : type))}
          />

          <div
            className="layout-stage-shell"
            ref={canvasWrapRef}
            onDrop={onCanvasDrop}
            onDragOver={(event) => event.preventDefault()}
          >
            <Stage
              width={stageSize.width}
              height={stageSize.height}
              ref={stageRef}
              onMouseDown={onStagePointerDown}
              onTouchStart={onStagePointerDown}
            >
              <Layer>
                <Rect x={0} y={0} width={stageSize.width} height={stageSize.height} fill="#f9fbff" />
                <Rect
                  x={roomRect.x}
                  y={roomRect.y}
                  width={roomRect.width}
                  height={roomRect.height}
                  cornerRadius={18}
                  fill="#ffffff"
                  stroke="rgba(15, 23, 42, 0.16)"
                  strokeWidth={1.2}
                  name="room-surface"
                />

                {gridLines.map((line) => (
                  <Line
                    key={line.key}
                    points={line.points}
                    stroke="rgba(15, 23, 42, 0.06)"
                    strokeWidth={1}
                    listening={false}
                  />
                ))}

                <Text
                  x={roomRect.x + 14}
                  y={roomRect.y + roomRect.height - 26}
                  text={SCALE_LABEL}
                  fontSize={12}
                  fill="#607087"
                  listening={false}
                />

                {items.map((item) => {
                  const definition = LAYOUT_ITEM_BY_TYPE[item.type];
                  const isSelected = selectedId === item.id;
                  const isDragging = draggingId === item.id;

                  return (
                    <Group
                      key={item.id}
                      x={item.x}
                      y={item.y}
                      offsetX={definition.footprint.width / 2}
                      offsetY={definition.footprint.height / 2}
                      rotation={item.rotation}
                      draggable
                      onClick={() => {
                        setSelectedId(item.id);
                        setArmedType(null);
                      }}
                      onTap={() => {
                        setSelectedId(item.id);
                        setArmedType(null);
                      }}
                      onDragStart={(event) => {
                        event.target.getStage()?.container().style.setProperty("cursor", "grabbing");
                        setDraggingId(item.id);
                        setSelectedId(item.id);
                      }}
                      onDragMove={(event) => {
                        const nextPosition = fitToRoom(item.type, event.target.x(), event.target.y());
                        event.target.position(nextPosition);
                      }}
                      onDragEnd={(event) => {
                        const snappedPosition = fitToRoom(item.type, event.target.x(), event.target.y());
                        event.target.position(snappedPosition);
                        setItems((previous) =>
                          previous.map((entry) =>
                            entry.id === item.id ? { ...entry, ...snappedPosition } : entry
                          )
                        );
                        setDraggingId(null);
                        event.target.getStage()?.container().style.setProperty("cursor", "default");
                      }}
                      onMouseEnter={(event) => {
                        if (!draggingId) {
                          event.target.getStage()?.container().style.setProperty("cursor", "grab");
                        }
                      }}
                      onMouseLeave={(event) => {
                        if (!draggingId) {
                          event.target.getStage()?.container().style.setProperty("cursor", "default");
                        }
                      }}
                    >
                      <Rect
                        width={definition.footprint.width}
                        height={definition.footprint.height}
                        cornerRadius={14}
                        fill="#ffffff"
                        stroke="rgba(15, 23, 42, 0.1)"
                        strokeWidth={1}
                        shadowColor="#0f172a"
                        shadowBlur={isDragging ? 24 : 14}
                        shadowOpacity={isDragging ? 0.2 : 0.1}
                        shadowOffsetY={isDragging ? 10 : 6}
                      />

                      {isSelected && (
                        <Rect
                          x={-4}
                          y={-4}
                          width={definition.footprint.width + 8}
                          height={definition.footprint.height + 8}
                          cornerRadius={16}
                          stroke="#1b5bd6"
                          strokeWidth={2}
                          dash={[8, 6]}
                        />
                      )}

                      <Group x={definition.footprint.width / 2} y={32} listening={false}>
                        <CanvasGlyph type={item.type} />
                      </Group>

                      <Text
                        y={definition.footprint.height - 24}
                        width={definition.footprint.width}
                        align="center"
                        text={definition.label}
                        fontSize={12}
                        fill="#415063"
                        listening={false}
                      />

                      {isSelected && (
                        <Group x={definition.footprint.width + 10} y={10}>
                          <Group
                            onMouseDown={(event) => {
                              event.cancelBubble = true;
                            }}
                            onTouchStart={(event) => {
                              event.cancelBubble = true;
                            }}
                            onClick={(event) => {
                              event.cancelBubble = true;
                              rotateItem(item.id);
                            }}
                            onTap={(event) => {
                              event.cancelBubble = true;
                              rotateItem(item.id);
                            }}
                          >
                            <Circle radius={11} fill="#ffffff" stroke="rgba(15, 23, 42, 0.18)" />
                            <Text x={-4} y={-6} text="R" fontSize={10} fill="#0f172a" />
                          </Group>

                          <Group
                            y={28}
                            onMouseDown={(event) => {
                              event.cancelBubble = true;
                            }}
                            onTouchStart={(event) => {
                              event.cancelBubble = true;
                            }}
                            onClick={(event) => {
                              event.cancelBubble = true;
                              duplicateItem(item.id);
                            }}
                            onTap={(event) => {
                              event.cancelBubble = true;
                              duplicateItem(item.id);
                            }}
                          >
                            <Circle radius={11} fill="#ffffff" stroke="rgba(15, 23, 42, 0.18)" />
                            <Text x={-4} y={-6} text="+" fontSize={12} fill="#0f172a" />
                          </Group>

                          <Group
                            y={56}
                            onMouseDown={(event) => {
                              event.cancelBubble = true;
                            }}
                            onTouchStart={(event) => {
                              event.cancelBubble = true;
                            }}
                            onClick={(event) => {
                              event.cancelBubble = true;
                              removeItem(item.id);
                            }}
                            onTap={(event) => {
                              event.cancelBubble = true;
                              removeItem(item.id);
                            }}
                          >
                            <Circle radius={11} fill="#fff4f4" stroke="rgba(220, 38, 38, 0.34)" />
                            <Text x={-3.5} y={-6} text="×" fontSize={12} fill="#b42318" />
                          </Group>
                        </Group>
                      )}
                    </Group>
                  );
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </section>
  );
}
