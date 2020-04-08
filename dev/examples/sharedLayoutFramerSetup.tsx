import * as React from "react"
import { useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "@framer"
import styled from "styled-components"

/** This demo emulates the screen setup that Framer uses in Navigation component */

const Container = styled.div`
    width: 300px;
    height: 500px;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 20px;
    position: relative;
`

const screen = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}

const card = {
    position: "absolute",
    top: 50,
    left: 50,
    width: 200,
    height: 200,
    background: "rgba(0,0,255,0.5)",
}

function A() {
    return (
        <motion.div layoutId="cover" style={screen}>
            <motion.div layoutId="card" style={card}></motion.div>
        </motion.div>
    )
}

function B() {
    return (
        <motion.div layoutId="cover" style={screen}>
            <motion.div
                layoutId="card"
                style={{ ...card, top: 200 }}
            ></motion.div>
        </motion.div>
    )
}

export const App = () => {
    const [page, setPage] = useState(0)
    return (
        <Container onClick={() => setPage(page === 0 ? 1 : 0)}>
            <AnimateSharedLayout type="crossfade" transition={{ duration: 2 }}>
                <AnimatePresence>
                    <A />
                    {page === 1 && <B />}
                </AnimatePresence>
            </AnimateSharedLayout>
        </Container>
    )
}
