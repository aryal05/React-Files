import React from 'react'

const Card = () => {
  return (
    <div class="container mx-4 my-4">
  <div class="w-64 border">
    <img src="https://cdn.pixabay.com/photo/2017/03/28/12/00/ancient-2181889_1280.jpg" class="w-full h-[300px]" alt="..."/>
    <div class="p-4">
      <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Hello World</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
      <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
    </div>
  </div>
  
</div>
  )
}

export default Card
