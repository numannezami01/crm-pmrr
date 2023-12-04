"use client"
import React from 'react';
import style from "./style.module.css";
import Image from 'next/image';
import Link from 'next/link';




const KnowledgeBank = () => {



  return (
    <div className={style.main}>
        <div className={style.nav}>
             <Image src="/logo.png" height={50}width={200} alt="" />
          </div>   
           <div className={style.cato}>
            <h2 className={style.h2}> FCD categories </h2>
           </div>
           <div className={style.Rec}>
            <div className={style.boxes}>
              <Link className={style.links} href="/food">
                <h2 className={style.h3}>explore more - FOOD</h2>
              </Link>  
              
            </div>
            <div className={style.boxes}></div>
            <div className={style.boxes}></div>
            <div className={style.boxes}></div>
            <div className={style.boxes}></div>
            <div className={style.boxes}></div>
            <div className={style.boxes}></div>
           </div>
     </div>
       

    
  )
}

export default KnowledgeBank