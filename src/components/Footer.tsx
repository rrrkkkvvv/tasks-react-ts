import FooterType from '../types/FooterType'

export default function Footer({ countOfActiveTodos, countOfCompletedTodos }: FooterType) {
    return (
        <footer className="app-footer"><span className='count'>{countOfActiveTodos}</span> more to do, <span className='count'>{countOfCompletedTodos}</span> done</footer>
    )
}
