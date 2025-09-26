const RightWidget = () => (
  <div className="fixed flex flex-col gap-4">
    <div className="rounded-sm bg-gradient-to-b from-sidebar-accent via-sidebar-accent/10 to-sidebar-border/70 p-4">
      <div className="flex flex-col gap-4">
        <div className="font-medium capitalize">Learn Now</div>
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-xl">
            How to use Next.js and server action!
          </h2>
          <p className="text-sm">Takes 30 minutes to complete</p>
          <p>
            Next.js Server Actions let you run server-side code directly from
            your client components without creating a separate API route.
          </p>
        </div>
        <button
          className="w-[60px] rounded-sm bg-chart-2/20 p-2 text-sm hover:bg-chart-2/30"
          type="button"
        >
          Watch
        </button>
      </div>
    </div>

    <div className="rounded-sm bg-gradient-to-b from-sidebar-accent via-sidebar-accent/10 to-sidebar-border/70 p-4">
      <div className="flex flex-col gap-4">
        <div className="font-medium capitalize">Comming soon</div>
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-xl">
            Use React 19 and React server component and many more
          </h2>
          <p className="text-sm">Takes 30 minutes to complete</p>
          <p>
            Next.js Server Actions let you run server-side code directly from
            your client components without creating a separate API route.
          </p>
        </div>
        <button
          className="w-[60px] rounded-sm bg-chart-2/20 p-2 text-sm hover:bg-chart-2/30"
          type="button"
        >
          Watch
        </button>
      </div>
    </div>
  </div>
);

export default RightWidget;
