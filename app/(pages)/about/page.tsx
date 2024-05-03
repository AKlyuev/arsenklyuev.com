import Image from 'next/image';

export const metadata = {
  title: 'About - Arsen Klyuev',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div>
      <Image 
            src="/propic.png"
            width={368}
            height={460}
            className="block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        <p>Hi! I'm Arsen. I live in Chicago and work on software.</p>
        <p>I previously worked at Qualtrics for 4 years, in Seattle and remotely. I did a mix of frontend and backend work. </p>
        <p>I grew up in Maryland, and studied Computer Science and Applied Math at Johns Hopkins University. I love technical problems and games. I'm also interested in reading (see my <a href={'/bookshelf'} className={'cursor-pointer underline'}>bookshelf</a>), entrepreneurship, and fitness/health. </p> 
        <p>You can find me on Twitter (pending) and Linkedin, or email me at akliouev1 [at] (Google's email service)</p>

      </div>
    </section>
  )
}
