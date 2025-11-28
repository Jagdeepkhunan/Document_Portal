
// import type { NextApiRequest, NextApiResponse } from 'next'
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const data = req.body ; 
//   console.log(" -- data : ", data ) ;
//   const id = "test" ; // await createItem(data)
//   res.status(200).json({ id })
// }

type TypeProps = {
    name: string;
};

export async function createTodo(prevState:TypeProps, formData:TypeProps) {
    //  const todo = formData.get('todo');
    console.log("--formData : ", formData ) ;
    // ... (perform database operation)
    return { message: 'Todo added successfully!' };
}
