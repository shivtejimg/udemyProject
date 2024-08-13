import { useEffect } from "react"
import { useState } from "react"
import StarRating from "./StarRating";
import axios from "axios";
const tempMoviesData =  [

  { 
    id: "tt4562",
    Title: "Inception",
    Year: 2010,
    Poster: "https://image.tmdb.org/t/p/w185/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg"
  },
  {
    id: "tt4562",
    Title: "House of the Dragon",
    Year: "Jul 29, 2024",
    Poster: "https://image.tmdb.org/t/p/w185/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg"
  },
  {
    id: "tt45ddfd62",
    Title: "Bad Boys: Ride or Die",
    Year: "Jun 5, 2024",
    Poster: "https://image.tmdb.org/t/p/w185/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg"
  },
  {
    id: "tt4562",
    Title: "House of the Dragon",
    Year: "Jul 29, 2024",
    Poster: "https://image.tmdb.org/t/p/w185/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg"
  },

]

export default function UsePopCorn() {
  const [quary, setQuary] = useState('')

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] = useState()
console.log(movies, 'movies')
  useEffect(() =>{
    setMovies(tempMoviesData)
  },[])
  const KEY = "f84fc31d";

      const URL = `http://www.omdbapi.com/?apikey=${KEY}&S=interstellar${quary}`

      const GetApi = async()=>{
        try{
          setIsLoading(true)
          const res =await axios.get(URL)
          console.log({res})
          setMovies(res.data.Search);
          // setIsLoading(false)
          console.log(res.ok,'res.ok')
          if(!res.data.Response) throw new Error("something went wrong with fatching movies")
        }catch(error){
          console.log(error)
          setError(error.message)
        }finally{
          setIsLoading(false)
        }
      }

      useEffect(()=>{
        GetApi()
      },[quary])

  return (
    <>
      <div  className="bg-slate-900 h-full py-2">
        <div className="mx-auto max-w-7xl lg:px-8 px-6 h-full">
          <Navbar>
            <Logo/>
            <SearchBar quary={quary} setQuary={setQuary}/>
            <FindResult movies={movies}/>
          </Navbar>
          <Main >
              <ListBox>
               {/* { isLoading ? <Loader/> : <MoviesList movies={movies} />} */}
              
              {
                isLoading && <Loader/>
              }
              {
                !isLoading && !error && <MoviesList movies={movies} />
              }
              
              {
                error && <ErrorMessage message={error}/>
              }
              </ListBox>
              <WatcheBox/>
          </Main>
        </div>
      </div>
      <div className="bg-slate-900 my-2">
      
        <StarRating maxRating={10}/>
      </div>
    </>
  )
}

function Loader (){
  return(
    <>
     <div className="flex items-center justify-center h-full text-white text-xl">Loading..</div>
    </>
  )
}

function ErrorMessage({message}){
  return(
    <>
     <div className="flex items-center justify-center h-full text-white text-xl">{message}</div>
    
    </>
  )
}


function Navbar({children}) {
  return(
    <div className="w-full bg-slate-600 rounded-md mb-5 p-4 flex items-center justify-between"> 
      {children}
      
    </div>

  )
}


function Logo(){
  return(
    <a className="logo cursor-pointer" href="/"><img className="h-8 md:h-12" src="https://moviewalas.vercel.app/static/media/movix-logo.9d67d13c155c38743f313bd4784d0c7b.svg" alt="logo" /></a>

  )
}

function SearchBar({quary,setQuary}){

  return(
    <div>
      <input 
      type="search" 
      value={quary} 
      onChange={(e) => setQuary(e.target.value)}
      className="bg-slate-500 rounded-full px-3 h-10 w-96 text-white" 
      placeholder="Search movies..."  
      />
    </div>
  )
}

function FindResult({movies}){
  return(
    <div className="text-white text-lg font-medium">
      found {movies?.length} result
    </div>
  )
}

function Main({children}){
  return(
    <div className=" grid grid-cols-2  gap-5">
      {children}
    </div>
  )
}
function ListBox({children}){

const [isOpen1, setIsOpen1] = useState(true)
  return(
    <>
    <div className="sidebar text-white w-full bg-slate-800 h-full p-4 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-end">
          <button 
            onClick={() => setIsOpen1((open) => !open)}
            className="size-7 bg-slate-500 rounded-md flex items-center justify-center  text-lg"
          >
            {isOpen1 ? "-" : "+"}
          </button>
        </div>
        <div>
          {isOpen1 &&  children}
        </div>
      </div>

    </div>
    </>
    
  )
 }

 function MoviesList({movies}){

  return(
      <>
        <ul className="flex flex-col gap-3">
          {
            movies?.map((item, index) => {
              return(
                <li key={index} className="flex  gap-3 border-b border-gray-700 pb-2">
                  <div className="flex h-14 w-12 rounded-md overflow-hidden mr-2">
                    <img src={item.Poster} alt={`${item.Title} Poster`} className="size-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white text-base">{item.Title}</div>
                    <div className="flex items-center text-xs mt-1 text-gray-300 gap-3"> <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></span> {item.Year}</div>
                  </div>
                </li>
              )
            })
          }
          </ul>
      </>
  )
}

function WatcheBox(){
  const [isOpen2, setIsOpen2] = useState(true)
  return(
    <>
      <div className="w-full bg-slate-800 h-full p-4 rounded-md ">
          <div className="bg-slate-600 rounded-md p-2 relative">
            <div className="text-base text-white font-medium">MOVIES YOU WATCHED</div>
            <ul className="flex items-center gap-3">
              <li>
                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M112,112h32v32H112ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-64,96V112h32a8,8,0,0,0,0-16H160V64a8,8,0,0,0-16,0V96H112V64a8,8,0,0,0-16,0V96H64a8,8,0,0,0,0,16H96v32H64a8,8,0,0,0,0,16H96v32a8,8,0,0,0,16,0V160h32v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,0-16Z"></path></svg></span> 2 Movies</div>
              </li>
              <li>
                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path></svg></span> 8.56</div>
              </li>
              <li>
                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256.438 25.78l-41.75 127.19 41.625 30 42.093-30.22-41.97-126.97zm-90.157 91.064c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.345-13.044 29.345-29.375 0-16.333-13.012-29.376-29.344-29.376zm179.97.375c-16.332 0-29.375 13.042-29.375 29.374 0 16.33 13.043 29.344 29.375 29.344s29.375-13.013 29.375-29.344c0-16.332-13.043-29.375-29.375-29.375zM207.5 170.843c-5.795 9.65-14.895 17.124-25.688 20.844L197.595 241l2.062 6.438-5.47 3.968-49.06 35.813c5.772 7.404 9.438 16.525 10.06 26.436l59.658.28 6.75.033 2.094 6.405L243 379.188c4.37-1.32 8.996-2.032 13.78-2.032 4.652 0 9.145.69 13.408 1.938l19.5-58.97 2.093-6.405 6.75-.033 56.72-.156c.83-10.39 5.006-19.848 11.438-27.342l-48.032-35.22L313.22 247l2.092-6.406 15.625-48.5c-10.945-3.71-20.17-11.247-26-21.03l-43.187 31.03-5.47 3.906-5.467-3.906-43.313-31.25zm-44.375 23.78l-140.188.657 108.157 79 46.625-34-14.595-45.655zm186.53.25l-14.5 45.032 46.876 34.344c.24-.117.48-.23.72-.344l107.188-78.625-140.282-.405zm-242.405 92.44c-16.332-.002-29.375 13.042-29.375 29.373 0 16.332 13.043 29.375 29.375 29.375s29.375-13.043 29.375-29.375c0-16.33-13.043-29.375-29.375-29.375zm295.875.686c-16.332 0-29.375 13.043-29.375 29.375s13.043 29.375 29.375 29.375 29.375-13.043 29.375-29.375S419.457 288 403.125 288zm-46.594 44.22l-51.217.124-18.344 55.47 113.78 81.78-44.22-137.375zm-200.5.124l-43.905 137.25 113.906-82.188-18-54.812-52-.25zm100.75 63.5c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.376-13.044 29.376-29.375 0-16.333-13.043-29.376-29.375-29.376z"></path></svg></span>9.9</div>
              </li>
              <li>
                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.656 22.75c-131.173 0-237.72 33.326-237.72 74.344.002 22.39 32.41 42.59 82.564 56.22-17.407-8.91-27.53-19.216-27.53-30.47 0-32.128 81.75-58.53 182.686-58.53 100.937 0 183.25 26.4 183.25 58.53 0 11.194-10.3 21.59-27.53 30.47 49.843-13.627 81.968-33.91 81.968-56.22 0-41.018-106.514-74.344-237.688-74.344zM147.47 103.094v30.094h216.28v-30.094H147.47zm4.374 48.78V361.94h18.687V151.875h-18.686zm39.125 0c.698 61.812 25.325 96.435 52.81 103.814-27.847 7.475-52.776 42.9-52.843 106.25h128.188c-.066-63.353-24.952-98.766-52.78-106.25 27.468-7.386 52.05-41.998 52.75-103.813H190.968zm147.936 0V361.94h18.688V151.875h-18.688zM100.5 360.72c-50.153 13.626-82.563 33.827-82.563 56.217 0 41.018 106.546 74.344 237.72 74.344 131.173 0 237.687-33.325 237.687-74.342 0-22.31-32.125-42.593-81.97-56.22 17.232 8.88 27.532 19.244 27.532 30.438 0 32.13-82.313 58.563-183.25 58.563S72.97 423.283 72.97 391.155c0-11.254 10.123-21.528 27.53-30.437zm46.97 19.905v30.063h216.28v-30.063H147.47z"></path></svg></span> 32 min</div>
              </li>
            </ul>
              <div className="flex items-center justify-end absolute right-2 top-2">
              <button 
                onClick={() => setIsOpen2((open) => !open)}
                className="size-7 bg-slate-500 rounded-md flex items-center justify-center text-white text-lg"
              >
                {isOpen2 ? "-" : "+"}
              </button>
              </div>
          </div>
          {
            isOpen2 && (
              <>
                <div>
                  <ul className="flex flex-col gap-3 mt-4">
                  <li className="flex  gap-3 border-b border-gray-700 pb-2">
                        <div className="flex h-14 w-12 rounded-md overflow-hidden mr-2">
                          <img src="https://image.tmdb.org/t/p/w185/wWba3TaojhK7NdycRhoQpsG0FaH.jpg" alt="" className="size-full" />
                        </div>
                        <div>
                          <div className="text-white text-base">movies name</div>
                          <div>
                            <ul className="flex items-center gap-3">
                              <li>
                                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M112,112h32v32H112ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-64,96V112h32a8,8,0,0,0,0-16H160V64a8,8,0,0,0-16,0V96H112V64a8,8,0,0,0-16,0V96H64a8,8,0,0,0,0,16H96v32H64a8,8,0,0,0,0,16H96v32a8,8,0,0,0,16,0V160h32v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,0-16Z"></path></svg></span> 2 Movies</div>
                              </li>
                              <li>
                                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path></svg></span> 8.56</div>
                              </li>
                              <li>
                                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256.438 25.78l-41.75 127.19 41.625 30 42.093-30.22-41.97-126.97zm-90.157 91.064c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.345-13.044 29.345-29.375 0-16.333-13.012-29.376-29.344-29.376zm179.97.375c-16.332 0-29.375 13.042-29.375 29.374 0 16.33 13.043 29.344 29.375 29.344s29.375-13.013 29.375-29.344c0-16.332-13.043-29.375-29.375-29.375zM207.5 170.843c-5.795 9.65-14.895 17.124-25.688 20.844L197.595 241l2.062 6.438-5.47 3.968-49.06 35.813c5.772 7.404 9.438 16.525 10.06 26.436l59.658.28 6.75.033 2.094 6.405L243 379.188c4.37-1.32 8.996-2.032 13.78-2.032 4.652 0 9.145.69 13.408 1.938l19.5-58.97 2.093-6.405 6.75-.033 56.72-.156c.83-10.39 5.006-19.848 11.438-27.342l-48.032-35.22L313.22 247l2.092-6.406 15.625-48.5c-10.945-3.71-20.17-11.247-26-21.03l-43.187 31.03-5.47 3.906-5.467-3.906-43.313-31.25zm-44.375 23.78l-140.188.657 108.157 79 46.625-34-14.595-45.655zm186.53.25l-14.5 45.032 46.876 34.344c.24-.117.48-.23.72-.344l107.188-78.625-140.282-.405zm-242.405 92.44c-16.332-.002-29.375 13.042-29.375 29.373 0 16.332 13.043 29.375 29.375 29.375s29.375-13.043 29.375-29.375c0-16.33-13.043-29.375-29.375-29.375zm295.875.686c-16.332 0-29.375 13.043-29.375 29.375s13.043 29.375 29.375 29.375 29.375-13.043 29.375-29.375S419.457 288 403.125 288zm-46.594 44.22l-51.217.124-18.344 55.47 113.78 81.78-44.22-137.375zm-200.5.124l-43.905 137.25 113.906-82.188-18-54.812-52-.25zm100.75 63.5c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.376-13.044 29.376-29.375 0-16.333-13.043-29.376-29.375-29.376z"></path></svg></span>9.9</div>
                              </li>
                              <li>
                                  <div className="flex items-center text-xs mt-1 text-gray-300 gap-1"> <span><svg className="text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.656 22.75c-131.173 0-237.72 33.326-237.72 74.344.002 22.39 32.41 42.59 82.564 56.22-17.407-8.91-27.53-19.216-27.53-30.47 0-32.128 81.75-58.53 182.686-58.53 100.937 0 183.25 26.4 183.25 58.53 0 11.194-10.3 21.59-27.53 30.47 49.843-13.627 81.968-33.91 81.968-56.22 0-41.018-106.514-74.344-237.688-74.344zM147.47 103.094v30.094h216.28v-30.094H147.47zm4.374 48.78V361.94h18.687V151.875h-18.686zm39.125 0c.698 61.812 25.325 96.435 52.81 103.814-27.847 7.475-52.776 42.9-52.843 106.25h128.188c-.066-63.353-24.952-98.766-52.78-106.25 27.468-7.386 52.05-41.998 52.75-103.813H190.968zm147.936 0V361.94h18.688V151.875h-18.688zM100.5 360.72c-50.153 13.626-82.563 33.827-82.563 56.217 0 41.018 106.546 74.344 237.72 74.344 131.173 0 237.687-33.325 237.687-74.342 0-22.31-32.125-42.593-81.97-56.22 17.232 8.88 27.532 19.244 27.532 30.438 0 32.13-82.313 58.563-183.25 58.563S72.97 423.283 72.97 391.155c0-11.254 10.123-21.528 27.53-30.437zm46.97 19.905v30.063h216.28v-30.063H147.47z"></path></svg></span> 32 min</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                  </ul>
                </div>
              
              </>
            )
          }
      </div>
    </>
  )
}
