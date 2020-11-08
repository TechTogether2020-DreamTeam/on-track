/*
 * Use this component to display time.
 * Be sure to pass in a value from the EasyTime API as a prop to this component.
 */
export function TimeDisplay({currentTime}) {
    return (
        <>
            <p>{currentTime}</p>
        </>
    )
}