const LoginPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="flex w-[400px] flex-col rounded-sm bg-sidebar-accent p-10">
      <h1 className="mb-6 text-xl">Login to your account</h1>
      <form className="flex flex-col gap-2">
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          placeholder="Enter your email"
          type="text"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          placeholder="Enter your password"
          type="password"
        />
        <button
          className="mt-2 w-[70px] cursor-pointer rounded-sm bg-chart-2/20 p-3 text-sm hover:bg-chart-2/30"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

export default LoginPage;
