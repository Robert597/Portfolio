export const floatIn = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate:{
        opacity:1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 1,
            ease: "linear"
        }
    }
}

export const rollText = {
    initial: {
        opacity: 0.5,
       scale: 0.5
    },
    animate:{
        opacity:1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: "circIn"
        }
    }
}
