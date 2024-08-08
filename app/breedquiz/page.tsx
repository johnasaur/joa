export default function BreedQuiz() {
  return (
    <main>

<div className="bg-gray-500">
    <h1 className="text-3xl text-center 
            text-white font-bold mt-8">
   
Pick your breed!

    </h1>
    <form id="form"
        className="bg-white max-w-lg mx-auto 
                mt-8 p-8 rounded-lg shadow-lg">
     
        {/* DROPDOWN      */}
        <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                Pick the animal: 
            </label>
            <select name="role" id="role"
                    required
                    className="appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline">
                <option value="student">Cat</option>
                <option value="intern">Dog</option>
                <option value="professional">Both</option>
            
            </select>
        </div>

        {/* RADIO BUTTON */}
        <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
                Pick the animal: 
            </label>
            <div className="flex">
                <label htmlFor="recommed-1" className="mr-4">
                    <input type="radio" id="recommed-1"
                        name="recommed" className="mr-2"/>CAT
                </label>
                <label htmlFor="recommed-2" className="mr-4">
                    <input type="radio" id="recommed-2"
                        name="recommed" className="mr-2"/>DOG
                </label>
            </div>
        </div>

        {/* CHECKBOXES */}
        <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
                Pick the animal: 
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="inp-1">
                    <input type="checkbox" name="inp" className="mr-2"/>Cat
                </label>
                <label htmlFor="inp-2">
                    <input type="checkbox" name="inp" className="mr-2"/>
                    Dog
                </label>
             
            </div>
        </div>

        <div className="mb-6">
            <label htmlFor="comment"
                className="block text-gray-700 font-bold mb-2">
                Any comments or suggestions
            </label>
            <textarea name="comment" id="comment"
                    required
                    placeholder="Enter your comment here"
                    className="appearance-none border rounded w-full 
                            py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline">
            </textarea>

            <br></br></div>

        <p> Optional filters</p>
<br></br>
            <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
                Age: 
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="inp-1">
                    <input type="checkbox" name="inp" className="mr-2"/>Baby (0-1 year) </label>
                <label htmlFor="inp-2">
                    <input type="checkbox" name="inp" className="mr-2"/>Adult (2-7 years)</label>
                <label htmlFor="inp-2">
                    <input type="checkbox" name="inp" className="mr-2"/>Senior (8+ years)</label>
             
            </div>
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
                Sex: 
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="inp-1">
                    <input type="checkbox" name="inp" className="mr-2"/>Female </label>
                <label htmlFor="inp-2">
                    <input type="checkbox" name="inp" className="mr-2"/>Male</label>
             
            </div>
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
                Neutered/Spayed: 
            </label>
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="inp-1">
                    <input type="checkbox" name="inp" className="mr-2"/>Yes </label>
                <label htmlFor="inp-2">
                    <input type="checkbox" name="inp" className="mr-2"/>No</label>
             
            </div>
        </div>

        <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                State: 
            </label>
            <select name="role" id="role" 
                    required
                    className="appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline">
                <option value="student"></option>
                <option value="student">AL</option>
                <option value="intern">AK</option>
                <option value="professional">AZ</option>
                <option value="professional">AR</option>
                <option value="professional">CA</option>
                <option value="professional">CO</option>
                <option value="professional">CT</option>
            
            </select>
        </div>

        <button type="submit"
                className="bg-green-600 text-white font-bold py-2 
                        px-4 rounded focus:outline-none 
                        focus:shadow-outline">Submit
        </button>
    </form>
    <div id="message"
        className="hidden bg-white max-w-lg mx-auto 
                mt-8 p-8 rounded-lg shadow-lg">
        <p className="text-2xl text-center text-green-600 font-bold">
            Thank you for submitting the form!
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