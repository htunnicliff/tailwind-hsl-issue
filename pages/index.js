export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-white max-w-md text-center mx-auto">
      <div className="bg-evergreen-spaces bg-opacity-50 p-6 rounded-lg w-full">
        <code>hsl(152 75% 40%)</code> + <code>.bg-opacity-50</code>
      </div>
      <div className="bg-evergreen-commas bg-opacity-50 p-6 rounded-lg w-full">
        <code>hsl(152, 75%, 40%)</code> + <code>.bg-opacity-50</code>
      </div>
      <div className="text-evergreen-spaces text-opacity-50 p-6 rounded-lg w-full border">
        <code>hsl(152 75% 40%)</code> + <code>.text-opacity-50</code>
      </div>
      <div className="text-evergreen-commas text-opacity-50 p-6 rounded-lg w-full border">
        <code>hsl(152, 75%, 40%)</code> + <code>.text-opacity-50</code>
      </div>
    </div>
  );
}
