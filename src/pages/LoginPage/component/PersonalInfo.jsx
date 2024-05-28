import {useState, useEffect} from 'react'
import axios from 'axios';
import { Languages } from '../../../utils/data';


const PersonalInfo = () => {
     const [countries, setCountries] = useState([]);
     const[country, setCountry] = useState("")
     const[language, setLanguage] = useState("")
     console.log(language)
     const changeLanguage = (e)=>{
      setLanguage(e.target.value)
     }
     const changeCountry = (e)=>{
      setCountry(e.target.value)
     }
     const url = "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";

     const fetchCountry = async (url) => {
       try {
         const response = await axios.get(url);
         const data = await response.data;
         setCountries(data);
       } catch (error) {
         console.log(error.response);
       }
     };
     useEffect(() => {
       fetchCountry(url);
     }, []);
     const newCountry = [...new Set(countries.map((item) => item.country))];

  return (
    <div>
      {/* text  */}
      <article className="mt-12 md:mt-5">
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
            <label htmlhtmlFor="birthDate" className='font-700'>BirthDate</label> <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-3 md:w-[80%] focus:outline-none p-2 text-[1rem] rounded-md"
              placeholder="MM-DD-YY"
            />
          </div>
        </form>
      </div>
      {/*radio input*/}
      <article className="mt-7">
        <h3 className='font-700'>Gender</h3>
        <form action="" className="mt-4 flex gap-x-4  ">
          {/* input-1  */}
          <div className="flex items-center gap-x-3 ">
            <label htmlFor="Male" className="">
              Male
            </label>
            <input type="radio" id="male" name="gender" className="" />
          </div>
          {/* input-2  */}
          <div className="flex items-center gap-x-3 ">
            <label htmlFor="Female">Female</label>
            <input type="radio" id="female" name="gender" />
          </div>
          {/* input-3  */}
          <div className="flex items-center gap-x-3 ">
            <label htmlFor="Non-Binary">Non-Binary</label>
            <input type="radio" id="non-binary" name="gender" />
          </div>
        </form>
      </article>
      {/*radio input */}

      {/* country  */}
      <article className="mt-4">
        {/* country */}
        <div>
          <h3 className='font-700'>Country/Region</h3>
          {/* country input  */}
          <form className="mt-0">
            <div>
              <select
                id="countries"
                name="countries"
                placeholder="Select Country"
                className="border border-[#3D217A] mt-3 w-[13.8rem] md:w-[80%] focus:outline-none p-2 text-[1rem] rounded-md"
                value={country}
                onChange={changeCountry}
              >
                <option value="Select Country">Select Country</option>
                {newCountry.map(function (item, index) {
                  return (
                    <option value={item} className="text-slate-600" key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
          {/* end of country input  */}
        </div>
        {/*end of country */}
      </article>

      {/*Language */}
      <article className="mt-4">
        {/* country */}
        <div>
          <h3 className='font-700'>Language</h3>
          {/* country input  */}
          <form className="mt-0">
            <div>
              <select
                id="countries"
                name="countries"
                placeholder="Select Country"
                className="border border-[#3D217A] mt-3 w-[13.8rem] md:w-[80%] focus:outline-none p-2 text-[1rem] rounded-md"
                value={language}
                onChange={changeLanguage}
              >
                <option value="Select Country">Select Language</option>
                {Languages.map(function (item, index) {
                  return (
                    <option value={item} className="text-slate-600" key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
          {/* end of country input  */}
        </div>
        {/*end of country */}
      </article>
    </div>
  );
}

export default PersonalInfo