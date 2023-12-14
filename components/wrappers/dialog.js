function Dialog({ title, message }) {
  return (
    <>
      <h2 className="text-zone text-primary text-4xl lg:text-6xl ml-8 lg:ml-16 mt-32">
        {title}
      </h2>

      <p className="relative text-gray-300 text-gl lg:text-xl ml-8 lg:ml-16 lg:w-[550px]  my-16 ">
        {message}
      </p>
    </>
  );
}

export default Dialog;
