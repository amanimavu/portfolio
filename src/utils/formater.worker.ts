const ctx: Worker = self as any

// Post data to parent thread
postMessage({ foo: "foo" })

// Respond to message from parent thread
onmessage = (e: MessageEvent<string>) => {
    const codeString = e.data
    console.log(codeString)
}
