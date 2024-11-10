"use client"
import {useState} from 'react'; 
import { Pet } from '@/lib/model/pet';

export default function AddPet() {
    const [petType, setpetType] = useState('');
    const [litter, setLitter] = useState('');
    const [litterDetails, setLitterDetails] = useState('');
    const [sex, setSex] = useState('');
    const [isFixed, setisFixed] = useState('');
    const [isShowPet, setisShowPet] =useState('');
    const [furColor, setfurColor] = useState('');
    const [hypoAllergies, sethypoAllergies] = useState('');
    const [pricePoint, setpricePoint] = useState('');
    const [eyeColor, seteyeColor] = useState('');
    const [age, setAge] = useState('');
    const [hairLength, sethairLength] = useState('');
    const [comments, setComment] =useState('');
    const [resultMessage, setResultMessage] = useState('')

    const handleSubmit = async (e) => {
        console.log("HIT HANDLE SUBMIT")
        const pet: Pet= {
            petType: petType,
            litter: litter,
            litterDetails: litterDetails,
            sex: sex,
            isFixed: isFixed,
            isShowPet: isShowPet,
            furColor: furColor,
            hypoAllergies: hypoAllergies,
            pricePoint: pricePoint,
            eyeColor: eyeColor,
            age: age,
            hairLength: hairLength,
            comments: comments

        }
        console.log(pet)

        try {
            const response = await fetch('/api/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pet)
                    
            });

            const result = await response.json();
            console.log("RESULT", result)
            setResultMessage(result)
        }
        
    
        catch {
            console.log('hit again')
        }
    }
    return (
      <main >
  
  <div className=" container mx-auto bg-gray-500">
      <h1 className="text-3xl text-center 
              text-white font-bold mt-8">
     
  Pick your breed!
  
      </h1>
      <form id="form"
          className="bg-white max-w-lg mx-auto 
                  mt-8 p-8 rounded-lg shadow-lg">
       
   
          <div className="mb-6">
              <label htmlFor="commenta"
                  className="block text-gray-700 font-bold mb-2">
                   comments 
              </label>
              <textarea name="commenta" id="commenta" onChange={(e)=> setComment(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentb"
                  className="block text-gray-700 font-bold mb-2">
                 litter?
              </label>
              <textarea name="litter" id="commentb" onChange={(e)=> setLitter(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentv"
                  className="block text-gray-700 font-bold mb-2">
                    litter details
              </label>
              <textarea name="litter details" id="commentv" onChange={(e)=> setLitterDetails(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentd"
                  className="block text-gray-700 font-bold mb-2">
                    show pet
              </label>
              <textarea name="litter detailsa" id="commentd" onChange={(e)=> setisShowPet(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commente"
                  className="block text-gray-700 font-bold mb-2">
                    fur color
              </label>
              <textarea name="litter detailse" id="commente" onChange={(e)=> setfurColor(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentf"
                  className="block text-gray-700 font-bold mb-2">
                    hypo allergies
              </label>
              <textarea name="hyppo allergies" id="commentf" onChange={(e)=> sethypoAllergies(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentg"
                  className="block text-gray-700 font-bold mb-2">
                    price 
              </label>
              <textarea name="litter detailsg" id="commentg" onChange={(e)=> setpricePoint(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commenth"
                  className="block text-gray-700 font-bold mb-2">
                    eye color
              </label>
              <textarea name="litter detailsh" id="commenth" onChange={(e)=> seteyeColor(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commenti"
                  className="block text-gray-700 font-bold mb-2">
                    hair length
              </label>
              <textarea name="litter detailsi" id="commenti" onChange={(e)=> sethairLength(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentj"
                  className="block text-gray-700 font-bold mb-2">
                    age
              </label>
              <textarea name="litter detailsj" id="commentj" onChange={(e)=> setAge(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentk"
                  className="block text-gray-700 font-bold mb-2">
                    sex
              </label>
              <textarea name="litter detailsk" id="commentk" onChange={(e)=> setSex(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentl"
                  className="block text-gray-700 font-bold mb-2">
                    is fixed
              </label>
              <textarea name="litter detailsl" id="commentl" onChange={(e)=> setisFixed(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>

              <div className="mb-6">
              <label htmlFor="commentm"
                  className="block text-gray-700 font-bold mb-2">
                    pet type
              </label>
              <textarea name="litter detailsm" id="commentm" onChange={(e)=> setpetType(e.target.value)}
                      required
                      placeholder="Enter your comment here"
                      className="appearance-none border rounded w-full 
                              py-2 px-3 text-gray-700 leading-tight 
                              focus:outline-none focus:shadow-outline">
              </textarea>
  
              <br></br></div>
  
          <button type="submit"
                    onClick={handleSubmit}
                  className="bg-green-600 text-white font-bold py-2 
                          px-4 rounded focus:outline-none 
                          focus:shadow-outline">
                            Submit
          </button>
      </form>
      <div id="message"
          className="hidden bg-white max-w-lg mx-auto 
                  mt-8 p-8 rounded-lg shadow-lg">
          <p className="text-2xl text-center text-green-600 font-bold">
              {resultMessage}
          </p>
      </div>
      {/* <script>
          document.getElementById('form')
              .addEventListener('submit', function (event) {
              event.preventDefault();
              document.getElementById('form').style.display = 'none';
              document.getElementById('message').classNameList.remove('hidden');
          });
      </script> */}
  </div>
  </main>
    )
  }