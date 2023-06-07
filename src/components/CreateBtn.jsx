const CreateBtn = () => {
  return (
    <div
      className={`font-medium h-[42px] w-[152px] rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  p-[2px]`}
    >
      <div className="bg-black w-[100%] h-[100%] rounded-lg flex flex-col items-center justify-center">
        <p className="font-medium text-white">Create Resume</p>
      </div>
    </div>
  );
};

export default CreateBtn;
