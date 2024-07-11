import { useCallback, useState,useEffect,useRef} from "react"
const Passwordgen = () => {
    const [length,setLength]=useState(8);
    const [numAll,setNumAll]=useState(false);
    const [charAll,setCharAll]=useState(false);
    const [password,setPassword]=useState("");

    //useRef
    const passwordRef=useRef(null);

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAll) str +="0123456789"
        if(charAll) str +="!@#$%^&*(){}[]_+?/"

        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)

    },[length,numAll,charAll,setPassword])

    const copyPasswordClipBoard=useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);

    },[password])

    useEffect(()=>{
        passwordGenerator()
    },[length,numAll,charAll,passwordGenerator])

    // passwordGenerator();


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center p-4">Password Generator</h1>
        <div className="flex shadow rounded-lg h-12  mb-4  gap-4 ">
            <input
             type="text"
             value={password}
             className="outline-none rounded-lg w-full text-white font-semibold bg-green-800  h-12 mb-24"
             placeholder="Password"
             readOnly
             ref={passwordRef}
            />
            <button onClick={copyPasswordClipBoard} className="bg-blue-400  text-white w-16 h-12 rounded-lg">copy</button>
        </div>
        <div className="flex text-sm gap-2 ">
            <div className="flex items-center gap-x-1 mb-8">
                <input
                 type="range"
                 min={6}
                 max={100}
                 value={length}
                 className="cursor-pointer"
                 onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1 h-6 ">
                <input 
                  type="checkbox"
                  defaultChecked={numAll}
                  id="numberInput"
                  onChange={()=>{
                    setNumAll((prev)=>!prev);
                  }}
                 />
                 <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 h-6 ">
                <input 
                  type="checkbox"
                  defaultChecked={charAll}
                  id="charInput"
                  onChange={()=>{
                    setCharAll((prev)=>!prev);
                  }}
                 />
                 <label htmlFor="charInput">Characters</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Passwordgen