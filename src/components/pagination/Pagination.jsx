const Pagination = () => (
  <div className="flex items-center justify-between">
    <button
      className="cursor-pointer rounded-sm border-2 border-sidebar-border px-2 py-1 text-muted-foreground text-sm disabled:cursor-auto disabled:opacity-30"
      disabled
      type="button"
    >
      Previous
    </button>
    <button
      className="cursor-pointer rounded-sm border-2 border-sidebar-border px-2 py-1 text-muted-foreground text-sm"
      type="button"
    >
      Next
    </button>
  </div>
);

export default Pagination;
