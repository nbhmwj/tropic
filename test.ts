let peeled = false
basic.forever(() => {
    if (tropic.pick(TropicalFruit.Banana)) {
        peeled = tropic.peel(TropicalFruit.Pinapple)
    }
})