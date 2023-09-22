

const PersonalInfo = () => {
  return (
    <div>
      {/* text  */}
      <article className="">
        <h1 className="text-[1.125rem] font-700">Personal Information</h1>
        <p className="max-w-lg mt-3">
          Edit your basic personal info to improve recommendations. This
          information is private and won’t show up in your public profile
        </p>
      </article>
      {/* end of text  */}
      {/* birthdate  */}
      <div className="mt-7">
        <form>
          <div>
            <label htmlFor="birthDate">BirthDate</label> <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-3 md:w-[80%] focus:outline-none p-2 text-[1rem] rounded-md"
              placeholder="MM-DD-YY"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo