import TodoFilterType from "../types/TodoFilterType"

export default function TodoFilters({ currentCategory, setCurrentCategory }: TodoFilterType) {
    return (
        <aside className="app-filters">
            <section className="toggle-group">
                <button className={`button ${currentCategory === 'all' && 'button--primary'} `} onClick={() => setCurrentCategory('all')}>All</button>
                <button className={`button ${currentCategory === 'active' && 'button--primary'} `} onClick={() => setCurrentCategory('active')}>Active</button>
                <button className={`button ${currentCategory === 'done' && 'button--primary'} `} onClick={() => setCurrentCategory('done')}>Done</button>
            </section>
        </aside>
    )
}
