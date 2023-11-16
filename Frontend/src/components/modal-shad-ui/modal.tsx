import React, { useState } from 'react'
import style from './modal-shad.module.scss'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'




const Modals: React.FC = () => {

  return (
    <Sheet>
      <SheetContent side='right' >
        <SheetHeader className={style.first_frame}>
          <div className={style.first_innerFrame}>
            <SheetTitle >
              <span className={style.name_text}>cloudEQ POA (20230215)</span>
              <span><Badge variant='success'>Published</Badge></span>
            </SheetTitle>
            <SheetTitle className={style.docType}>SLA • Service Based</SheetTitle>
            <SheetDescription className={style.descriptionDetails}>This SLA (Service Level Agreement) outlines a commitment between a service provider and the client,
              including details of the service, the standards the provider must adhere to, and the metrics to measure the performance.
            </SheetDescription>
          </div>
          <Button variant='outlineblue' >Edit Template</Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Modals