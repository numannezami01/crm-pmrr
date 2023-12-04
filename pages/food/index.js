"use client"
import React from 'react'
import style from "./style.module.css"
 import Image from 'next/image'



  const cards =[
    {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
     {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
    {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
    {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
    {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
    {photo:"pizza.jpg",desc:"pizza" , title:"hiiii heloooo"},
  ]

   const menuboxx=[
    {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
    {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
    {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
    {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
    {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
     {photo:"pasta.jpg",desc:"pasta",title:" pasta"},
   ]



 
const index = () => {




  return (
    <div className={style.main}>
      <div className={style.nav}>
        <Image className={style.img} src="/logo.png" height={50} width={100} alt="" />
      </div>
        <div className={style.hungry}>
          <div className={style.hungrydiv}>
            <div className={style.areyou}>
              <h5 className={style.h5}>Are you</h5>
              <h2 className={style.h2}>hungry ?</h2>
            </div>
            <div className={style.para}>
              <p className={style.p} >You can order here very easy and simple</p>
            </div>
            <div className={style.buttondiv}>
              <button className={style.btn}>order now</button>
              <button className={style.btn2}>more menu</button>
            </div>
          </div>
          <div className={style.scooty}>
            <Image className={style.imgg} src="/scooty.png" height={600} width={700} alt="" />
          </div>
        </div>
        <div className={style.menu}>
          <div className={style.topmenu}>
            <h3 className={style.h3}> our top <span className={style.span}>menu</span> </h3>
          </div>
           <div className={style.recdiv}>
            {cards.map((elem,index)=>(
                 <div key={index} className={style.box}>
                 <div className={style.photos}>
                 <img src= "/pizza.jpg"  height={200}width={300} alt="" />
                 </div>
                 <div className={style.middle}>
                   <h3 className={style.silroin}>{elem.desc}</h3>
                   <h5 className={style.strek}> {elem.title } </h5>
                   <h5 className={style.easy}>specilaty that is easy to make</h5>
                 </div>
                 <div className={style.last}>
                   <h4>89.00 <span className={style.spann}>$</span></h4>
                   <button className={style.btnnn}>buy now</button>
                 </div>
               </div>
            )

            )}
                
           </div>


        </div>
        <div className={style.surprize}>
          <div className={style.burger}>
            <div className={style.lefts}>
              <h2>Today' e Special</h2>
              <h1>surprise for you</h1>
              <p>we are company engaged in the fields food service with a very wide range throughout india we work closely with more than 100+ resturant in   India</p>
              <div className={style.order}>
                <h4 className={style.h4}><span className={style.doller}>$</span>49</h4>
                <button className={style.button}>order now</button>
              </div>
            </div>
            <div className={style.rightb}>
              <Image src="/burger.png" height={550} width={550} alt="" />
            </div>
          </div>
        </div>
        <div className={style.page4}>
          <div className={style.ourmenu}>
            <h1 className={style.h1}>our <span className={style.spanmenu}>menu</span></h1>
            <p>we are company engaged in the field food services with a
               very wide range throughtout india</p>
          </div>
          <div className={style.menudiv}>
          {menuboxx.map((elem,index)=>(
                 <div key={index} className={style.menuboxx}>
                 <div className={style.photos}>
                 <img src= "/pasta.jpg"  height={200}width={300} alt="" />
                 </div>
                 <div className={style.middle}>
                   <h3 className={style.silroin}>{elem.desc}</h3>
                   <h5 className={style.strek}> {elem.title } </h5>
                   <h5 className={style.easy}>hiiiihelloo</h5>
                 </div>
                 <div className={style.last}>
                   <h4>89.00<span className={style.spann}>$</span></h4>
                   <button className={style.btnnn}> buy now</button>
                 </div>
               </div>
            )
            )}
          </div>
          <div className={style.srvices}></div>
        </div>
    </div>
  )
}

export default index  