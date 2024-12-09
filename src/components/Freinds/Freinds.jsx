import React from "react";
import f from './Freinds.module.css'



export const Freinds = (props) => {
    
    let freind = props.freinds.map(f=>f.name)
    
    return (
        < div className={f.fren}>
            < div className= {f.sideUser}>
                < div className={f.userFrend}>
                    {freind}

                </div>

            </div>
            < div className="">
                < div className="">
                    fjfhvjhvhkb
                </div>

            </div>

        </div>
    )
}