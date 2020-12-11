

export const options = [
    { value: 'sports', label: 'Sports' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'movie', label: 'Movie' },
    { value: 'reading', label: 'Reading' },
    { value: 'music', label: 'Music' },
    { value: 'training', label: 'Training' },
    { value: 'work', label: 'Work' }
];

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        padding: 20,
        color: state.isFocused.menuColor,
    }),
    control: () => ({
        width: 400
    }),
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
       
        return { ...provided, opacity, transition };
    }
}