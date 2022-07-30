

export let reduce = (state, action) => {
    //my logical code
    return { ...state }
    throw new Error(`doesn't find this  ${action.type} action `)
}