import React from 'react'


const About = () => {
    document.title = 'Movie-Hub | About'
  return (
    <div class="text-zinc-100 mt-16">
        <div className='flex'>
            <div className='w-[60%]'>
                <img src="./jerry.png" alt="" className=' w-[65vh]' />
            </div>
            <div class="h-screen px-28  className='w-[40%]">
            <p class="text-5xl mb-6">
                Welcome to Movie Hub 
            </p>
            <p className='mb-6'>Your ultimate destination for all things entertainment!</p>
            <p class="text-sm mb-6">
                At Movie Hub, we strive to bring you the best of TV series, films, and OTT content, all in one place.
                <br /> Whether you're in the mood for a thrilling TV series, a blockbuster film, or the latest OTT releases,<br /> Movie Hub has got you covered.
            </p>
            <p class="text-sm mb-6">
                Our curated collection of content spans across genres, ensuring there's something for everyone. From <br />action-packed adventures to heartwarming dramas, from laugh-out-loud comedies to spine-chilling thrillers,<br /> Movie Hub offers a diverse range of entertainment options to suit every taste.
            </p>
            <p class="text-sm mb-6">
                We understand that your time is valuable, which is why we've designed Movie Hub to be user-friendly and <br /> intuitive. Our easy-to-navigate <br /> interface allows you to browse and discover new content effortlessly. <br /> With just a few clicks, you can find your next favorite TV series, film, or OTT show.
            </p>
            <p class="text-sm mb-6">
                At Movie Hub, we're not just about entertainment; we're also about community. Join our vibrant community of movie <br /> enthusiasts and TV buffs to discuss your favorite shows, share recommendations, and connect with like-minded individuals who share your passion for entertainment.
            </p>
            <p class="text-sm mb-6">
                Whether you're looking for your next binge-watch or simply want to unwind and relax with a good movie, Movie Hub is <br /> the perfect place to be. Sit back, relax, and enjoy the ultimate entertainment experience with Movie Hub.
            </p>
            <p class="text-sm mb-6">
                Thank you for choosing Movie Hub. We hope you enjoy your time here!
            </p>
        </div>
        </div>
        
    </div>



  )
}

export default About