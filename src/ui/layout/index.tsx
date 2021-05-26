import { LayoutInterface } from '../../types'




export default function Layout(props: LayoutInterface) {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}
