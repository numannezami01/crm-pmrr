"use client"
import React from 'react';
import style from "./style.module.css";
import Image from 'next/image';
import Link from 'next/link';




const KnowledgeBank = () => {



  return (
    <>
      <div className={style.main}>
        <div className={style.nav}>
          <div className={style.photo}>
           <Image src="/logo.png" height={50} width={130} alt="photos" />
          </div>
        </div>
        <div className={style.top}>
          <h2 className={style.text}>FCD CENTER</h2>
          <Image className={style.img} height={400}width={1400} src="/wave.jpg" alt="" />
        </div>
        <div className={style.bottom}>
         <h3 className={style.h3}>Our Categories will be</h3>
         <div className={style.bigbox}>
          <div className={style.box}>
              <Image className={style.img} src="/mountain.jpg" height={800}width={300}  alt="photos" />
            <div className={style.smbox}>
              <Link className={style.links} href="/fcd">numan</Link>
              {/* <div className={style.icons}> <FiArrowRight/></div> */}

            </div>
            </div>
            <div className={style.box}>
              <Image className={style.img} src="/mountain.jpg" height={800}width={300}  alt="photos" />
            <div className={style.smbox}>
              <Link className={style.links} href="/fcd">numan</Link>
              {/* <div className={style.icons}> <FiArrowRight/></div> */}
      
              
            </div>
          </div>
          <div className={style.box}>
              <Image className={style.img} src="/mountain.jpg" height={800}width={300}  alt="photos" />
            <div className={style.smbox}>
              <Link className={style.links} href="/fcd">numan</Link>
              {/* <div className={style.icons}> <FiArrowRight/></div> */}
            
                

            </div>
          </div>
          <div className={style.box}>
              <Image className={style.img} src="/mountain.jpg" height={800}width={300}  alt="photos" />
            <div className={style.smbox}>
              <Link className={style.links} href="/fcd">numan</Link>
              {/* <div className={style.icons}> <FiArrowRight/></div> */}
           
            
            </div>
          </div>
          <div className={style.box}>
              <Image className={style.img} src="/mountain.jpg" height={800}width={300}  alt="photos" />
            <div className={style.smbox}>
              <Link className={style.links} href="/fcd">numan</Link>
              {/* <div className={style.icons}> <FiArrowRight/></div> */}
  

            </div>
          </div>
          
         </div>

        </div>
      </div>
    </>



    
  )
}

export default KnowledgeBank