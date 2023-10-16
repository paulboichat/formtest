'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'



export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    todo: z.string().min(1),
  })
  const data = schema.parse({
    todo: formData.get('todo'),
  })

  // Insert the todo into the database
  console.log(data)
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  })
  const data = schema.parse({
    id: formData.get('id'),
    todo: formData.get('todo'),
  })

  // delete the todo from the database
  console.log(data)
}
