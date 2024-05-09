import {useLocalStorage} from "./useLocalStorage";
import './history.css';


function HistoryParagraph({value, header}) {
    if (value) {
        return (
            <>
                <b>{header}</b>
                <p>{value}</p>
            </>
        );
    } else {
        return (<></>);
    }
}

export default function History() {
    const [history, setHistory] = useLocalStorage('history', []);

    return (
        <>
            {history.map(form => (
                <div className='history-container' key={form.id}>
                    <HistoryParagraph value={form.firstName} header={'First Name'}/>
                    <HistoryParagraph value={form.lastName} header={'Last Name'}/>
                    <HistoryParagraph value={form.email} header={'Email'}/>
                    <HistoryParagraph value={form.phone} header={'Phone'}/>
                    <HistoryParagraph value={form.address} header={'Address'}/>
                    <button
                        className='delete-button'
                        type='submit'
                        onClick={() => {
                            setHistory(
                                history.filter(f => f.id !== form.id)
                            );
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}