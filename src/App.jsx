import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About,Cocktail,Error,HomeLayout,Landing,Newsletter,SinglePageError } from "./Pages";
import { loader as landingLoader } from "./Pages/Landing";
import {loader as singlePageLoader} from "./Pages/Cocktail"
import {action as newletterAction} from "./Pages/Newsletter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 1000 * 60 * 50
    }
  }
})

const App = () => {
  
  const router =createBrowserRouter([
    {
      path : '/',
      element : <HomeLayout/>,
      errorElement : <Error/>,
      children: [
        {
          index:true,          
          element:<Landing/>,
          errorElement : <SinglePageError/>,
          loader : landingLoader(queryClient)
        },

        {
          path: 'about',
          element:<About/>
        },
        {
          path: 'cocktail/:id',
          element:<Cocktail/>,
          errorElement : <SinglePageError/>,
          loader : singlePageLoader(queryClient)
        },
        {
          path: 'error',
          element:<Error/>
        },
        {
          path: 'newsletter',
          element:<Newsletter/>,
          action:newletterAction
        },
      ]
    }
  ])
   
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    
    </>
  );
};
export default App;
