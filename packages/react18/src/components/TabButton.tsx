import React from "react";

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: any;
}

export function TabButton({children, isActive, onClick}: TabButtonProps) {
  //  const [isPending, setTranstion] = useTransition();
    if(isActive) {
        return (<b>{children}</b>);
    }

    /*if (isPending) {
        return <b className="pending">{children}</b>;
    }*/

    const handleClick =() => {
       // setTranstion(() => onClick())
        onClick()
    }

    return (<button onClick={handleClick}>
        {children}
    </button>);
}