export const mapStateToProps = (state: any) => {
    return {
        ...state.user,
        ...state.theme
    }
}