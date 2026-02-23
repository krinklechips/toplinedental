type StudioToolbarProps = {
  hasSelection: boolean;
  onReset: () => void;
  onExportPng: () => void;
  onExportJson: () => void;
};

export default function StudioToolbar({
  hasSelection,
  onReset,
  onExportPng,
  onExportJson
}: StudioToolbarProps) {
  return (
    <div className="layout-toolbar">
      <div>
        <p className="eyebrow">Layout Studio</p>
        <h2>Clinic Layout Studio</h2>
        <p className="layout-toolbar-note">
          Drag items into the room, rotate with <kbd>R</kbd>, delete with <kbd>Delete</kbd>, duplicate
          with <kbd>Cmd/Ctrl + D</kbd>.
        </p>
      </div>

      <div className="layout-toolbar-actions">
        <button type="button" className="button ghost" onClick={onExportPng}>
          Export PNG
        </button>
        <button type="button" className="button ghost" onClick={onExportJson}>
          Export JSON
        </button>
        <button type="button" className="button ghost" onClick={onReset}>
          Reset
        </button>
        <span className={`layout-selection-chip${hasSelection ? " active" : ""}`}>
          {hasSelection ? "Item selected" : "No selection"}
        </span>
      </div>
    </div>
  );
}
