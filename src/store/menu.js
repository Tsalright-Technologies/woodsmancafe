

const initialState = {
  name: 'menu',
  menuList: [],
};

export default function menuReducer(state=initialState, action) {

  const { type, payload } = action;



}

export const apolloGet = (results) => {
  const { loading, error, data } = useQuery(GET_ITEMS)  
  
     
  if (error) return <h1>Something is wrong!!</h1>
  if (loading) return <h1>Loading...</h1>

  return {
    type: "SETSTATE",
    payload: results,
  }

}

