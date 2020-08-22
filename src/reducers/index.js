const initialState = {
    childNodes: [
        {
            title: "Item 1",
            childNodes: [
                {
                    title: "Item 1.1"
                },
                {
                    title: "Item 1.2"
                }
            ]
        },
        {
            title: "Item 2",
            childNodes: [
                {
                    title: "Item 2.1",
                    childNodes: [
                        {
                            title: "Item 2.1.1",
                            childNodes: [
                                {
                                    title: "Item 2.1.1.1"
                                },
                                {
                                    title: "Item 2.1.1.2"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Item 2.2"
                }
            ]
        }
    ]
};
//action없음.
export default function treestate(state = initialState) {
    return state;
}