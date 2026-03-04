import TomSelect from 'https://cdn.jsdelivr.net/npm/tom-select@2.3.1/dist/js/tom-select.complete.js/+esm';

// DOMContentLoaded в type="module" не обязателен, но для структуры оставим
document.addEventListener('DOMContentLoaded', () => {

    // 1. Single select
    document.querySelectorAll('.js-select-single').forEach((el) => {
        new TomSelect(el, {
            create: false,
            sortField: { field: 'text', direction: 'asc' }
        });
    });

    // 2. Single select (no typing/static)
    document.querySelectorAll('.js-select-single-static').forEach((el) => {
        new TomSelect(el, {
            allowEmptyOption: true,
            create: false,
            placeholder: el.getAttribute('placeholder') || 'Select an option',
            onInitialize: function() {
                this.control_input.readOnly = true;
                this.wrapper.classList.add('ts-control-readonly');
            }
        });
    });

    // 3. Multi-select (max 3)
    document.querySelectorAll('.js-select-multi').forEach((el) => {
        new TomSelect(el, {
            hidePlaceholder: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: el.getAttribute('placeholder') || 'Pick up to 3 options'
        });
    });


    // 3. Multi-select (max 3)
    document.querySelectorAll('.js-select-multi-static').forEach((el) => {
        new TomSelect(el, {
            allowEmptyOption: true,
            create: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: el.getAttribute('placeholder') || 'Pick up to 3 options',
            onInitialize: function() {
                this.control_input.readOnly = true;
                this.wrapper.classList.add('ts-control-readonly');
            }
        });
    });

    // 4. Tags (create on the fly)
    document.querySelectorAll('.js-select-tags').forEach((el) => {
        new TomSelect(el, {
            create: true,
            persist: false,
            plugins: ['remove_button'],
            placeholder: el.getAttribute('placeholder') || 'Add tags'
        });
    });

    // 5. Custom Rendering (Avatars)
    document.querySelectorAll('.js-select-custom').forEach((el) => {
        new TomSelect(el, {
            valueField: 'id',
            labelField: 'name',
            searchField: ['name', 'email'],
            options: [
                {id: 1, name: 'Nikola Tesla', email: 'tesla@example.com', avatar: 'https://i.pravatar.cc/32?u=1'},
                {id: 2, name: 'Marie Curie', email: 'curie@example.com', avatar: 'https://i.pravatar.cc/32?u=2'},
                {id: 3, name: 'Albert Einstein', email: 'einstein@example.com', avatar: 'https://i.pravatar.cc/32?u=3'}
            ],
            render: {
                option: (data, escape) => `
                    <div class="flex items-center">
                        <div class="avatar mr-2">
                            <img class="avatar__image" src="${escape(data.avatar)}" alt="${escape(data.name)}">
                        </div>
                        <div>
                            <span class="block font-medium">${escape(data.name)}</span>
                            <span class="block text-gray-500 text-xs">${escape(data.email)}</span>
                        </div>
                    </div>`,
                item: (data, escape) => `
                    <div class="flex items-center">
                        <img class="avatar__image" src="${escape(data.avatar)}" style="width:18px; margin-right:5px">
                        <span>${escape(data.name)}</span>
                    </div>`
            }
        });
    });

    // 6. Custom Rendering (Inline HTML)
    document.querySelectorAll('.js-select-custom-html').forEach((el) => {
        new TomSelect(el, {
            valueField: 'id',
            labelField: 'amount',
            searchField: ['amount'],
            allowEmptyOption: true,
            create: false,
            options: [
                {id: 1, amount: '31.42', change: '34%'},
                {id: 2, amount: '28.05', change: '12%'},
                {id: 3, amount: '45.90', change: '7%'},
                {id: 4, amount: '19.76', change: '4%'},
                {id: 5, amount: '62.10', change: '22%'},
                {id: 6, amount: '37.58', change: '9%'},
                {id: 7, amount: '53.33', change: '18%'},
                {id: 8, amount: '24.67', change: '3%'},
                {id: 9, amount: '70.21', change: '41%'},
                {id: 10, amount: '16.89', change: '2%'}
            ],
            render: {
                option: (data, escape) => `
                    <div>
                        $${escape(data.amount)} <span class="gray">(${escape(data.change)})</span>
                    </div>`,
                item: (data, escape) => `
                    <div>
                        $${escape(data.amount)} <span class="gray">(${escape(data.change)})</span>
                    </div>`
            },
            onInitialize: function() {
                this.control_input.readOnly = true;
                this.wrapper.classList.add('ts-control-readonly');
            }
        });
    });

    // 7. Remote Loading (GitHub)
    document.querySelectorAll('.js-select-remote').forEach((el) => {
        new TomSelect(el, {
            valueField: 'html_url',
            labelField: 'full_name',
            searchField: 'full_name',
            load: function(query, callback) {
                const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;
                fetch(url)
                    .then(response => response.json())
                    .then(json => callback(json.items))
                    .catch(() => callback());
            },
            render: {
                option: (item, escape) => `
                    <div class="py-1">
                        <div class="font-medium">${escape(item.full_name)}</div>
                        <div class="text-xs opacity-50">${escape(item.description || 'No description')}</div>
                    </div>`,
                item: (item, escape) => `<div>${escape(item.full_name)}</div>`
            }
        });
    });
});
