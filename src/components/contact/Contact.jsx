import styles from "./contact.module.css"
import headerImg from "../../assets/images/contact_us.png"
import PageIntro from "../pageIntro/PageIntro"
import contactBg from "../../assets/images/contact_us_background.jpg"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useFetchMessages } from "../../hooks/useFetchMessage"

export default function Contact() {
    const [show, setShow] = useState(false)

    const { sendMessage } = useFetchMessages()
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
        name: yup.string().required("Navn skal udfyldes"),
        telephone: yup.string().matches(phoneRegExp, "Telefon skal udfyldes"),
        email: yup.string().email().required("Email skal udfyldes"),
        subject: yup.string().required("Emne skal udfyldes"),
        message: yup.string().min(8, "Besked skal have mindst 8 tegn").required("Besked skal udfyldes")
    })

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors, isSubmitting}
    } = useForm({resolver: yupResolver(schema)})

    const name = watch("name")

    function showSuccess() {
        setShow(true)
        setTimeout(() => {
            setShow(false)
            reset()
        }, 5000);
    }

    async function onSubmit(data) {
        try {
            await sendMessage(data)
            showSuccess()
        } catch (error) {
            console.error("Fejl i at sende besked", error)
        }
    }

    return (
      <div className={styles.contactWrapper}>
        {show && 
        <div className={styles.successScreen}>
            <h3 className={styles.successHeading}>Tak! <br/> {name}</h3>
            <p className={styles.successMessage}>Vi har modtaget din besked og svarer tilbage hurtigst muligt</p>
        </div>}
        <img className={styles.contactBg} src={contactBg} />
        <img src={headerImg} alt="Header Image" className={styles.headerImg} />
        <PageIntro
          colorSwap
          heading={"KONTAKT OS"}
          subheading={"SEND OS EN BESKED OG VI SVARER HURTIGST MULIGT"}
        />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputArea}>
            <input type="text" placeholder="Navn" {...register("name")} />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Telefon"
              {...register("telephone")}
            />
            {errors.telephone && (
              <span className={styles.error}>{errors.telephone.message}</span>
            )}
          </div>

          <div className={styles.inputArea}>
            <input type="text" placeholder="Email" {...register("email")} />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.inputArea}>
            <input type="text" placeholder="Emne" {...register("subject")} />
            {errors.subject && (
              <span className={styles.error}>{errors.subject.message}</span>
            )}
          </div>
          <div className={styles.inputArea}>
            <textarea rows={3} placeholder="Besked" {...register("message")} />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}
          </div>
          <button type="submit" className={styles.submitBtn}>
            {isSubmitting ? "Sender..." : "Send"}{" "}
            <span>{String.fromCharCode(9658)}</span>
          </button>
        </form>
      </div>
    );
}