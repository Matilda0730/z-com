
import { ReactNode } from "react";
import styles from "@/app/page.module.css"

type Props = {children: ReactNode, modal: ReactNode}

export default function Layout ({children, modal}:Props) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}

//주소가 localhost:3000 일때는 children은 page.tsx , modal->@modaldefault.tsx
//주소가 localhost:3000/i/flow/login 일때엔 children -> i/flow/login/page.tsx