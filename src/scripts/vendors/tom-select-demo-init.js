import TomSelect from 'https://cdn.jsdelivr.net/npm/tom-select@2.3.1/dist/js/tom-select.complete.js/+esm';


// Multi-select (max 3)
document.querySelectorAll('[data-ref="init-tom-select-multi"]').forEach((el) => {
    new TomSelect(el, {
        hidePlaceholder: false,
        maxItems: 7,
        plugins: ['remove_button'],
        placeholder: el.getAttribute('placeholder') || 'Pick up to 3 options'
    });
});


// Multi-select (max 3, no typing/static)
document.querySelectorAll('[data-ref="init-tom-select-multi-static"]').forEach((el) => {
    new TomSelect(el, {
        allowEmptyOption: true,
        create: false,
        maxItems: 3,
        plugins: ['remove_button'],
        placeholder: el.getAttribute('placeholder') || 'Pick up to 3 options',
        onInitialize: function() {
            this.control_input.readOnly = true;
            this.wrapper.classList.add('ts-styling-readonly');
        }
    });
});

document.querySelectorAll('[data-ref="init-tom-select-multi-clear-button"]').forEach((el) => {
    new TomSelect(el, {
        hidePlaceholder: false,
        maxItems: 3,
        plugins: ['remove_button', 'clear_button'],
        placeholder: el.getAttribute('placeholder') || 'Pick up to 3 options'
    });
});



// Single select
document.querySelectorAll('[data-ref="init-tom-select-single"]').forEach((el) => {
    new TomSelect(el, {
        create: false,
        sortField: { field: 'text', direction: 'asc' }
    });
});

// Single select (no typing/static)
document.querySelectorAll('[data-ref="init-tom-select-single-static"]').forEach((el) => {
    new TomSelect(el, {
        allowEmptyOption: true,
        create: false,
        placeholder: el.getAttribute('placeholder') || 'Select an option',
        onInitialize: function() {
            this.control_input.readOnly = true;
            this.wrapper.classList.add('ts-styling-readonly');
        }
    });
});



// Tags (create on the fly)
document.querySelectorAll('[data-ref="init-tom-select-tags"]').forEach((el) => {
    new TomSelect(el, {
        create: true,
        persist: false,
        plugins: ['remove_button'],
        placeholder: el.getAttribute('placeholder') || 'Add tags'
    });
});



// Remote Loading (GitHub example)
document.querySelectorAll('[data-ref="init-tom-select-remote"]').forEach((el) => {
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
                <div>
                    <div>${escape(item.full_name)}</div>
                    <div class="gray">${escape(item.description || 'No description')}</div>
                </div>`,
            item: (item, escape) => `<div>${escape(item.full_name)}</div>`
        }
    });
});


// Custom Rendering: Bonuses
document.querySelectorAll('[data-ref="init-tom-select-bonuses"]').forEach((el) => {
    new TomSelect(el, {
        valueField: 'id',
        labelField: 'amount',
        searchField: ['amount'],
        allowEmptyOption: true,
        create: false,
        items: [1],
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
                    $${escape(data.amount)}&nbsp;<span class="gray">(${escape(data.change)})</span>
                </div>`,
            item: (data, escape) => `
                <div>
                    $${escape(data.amount)}&nbsp;<span class="gray">(${escape(data.change)})</span>
                </div>`
        },
        onInitialize: function() {
            this.control_input.readOnly = true;
            this.wrapper.classList.add('ts-styling-readonly');
        }
    });
});





// Custom Rendering: Approval (colored statuses)

const approvalDefaults = ['Approved', 'Rejected', 'N/A', 'Approved', 'Rejected', 'N/A', 'Approved', 'Rejected'];

document.querySelectorAll('[data-ref="init-tom-select-approval"]').forEach((el, index) => {
    new TomSelect(el, {
        allowEmptyOption: true,
        create: false,
        items: [approvalDefaults[index] || 'Approved'],
        options: [
            {value: 'Approved', text: 'Approved'},
            {value: 'Rejected', text: 'Rejected'},
            {value: 'N/A', text: 'N/A'}
        ],
        render: {
            option: (data, escape) => {
                if (data.value === 'Approved') {
                    return '<div><span class="blue">Approved</span></div>';
                }

                if (data.value === 'N/A') {
                    return '<div><span class="gray">N/A</span></div>';
                }

                return `<div>${escape(data.text || data.label || data.value || '')}</div>`;
            },
            item: (data, escape) => {
                if (data.value === 'Approved') {
                    return '<div><span class="blue">Approved</span></div>';
                }

                if (data.value === 'N/A') {
                    return '<div><span class="gray">N/A</span></div>';
                }

                return `<div>${escape(data.text || data.label || data.value || '')}</div>`;
            }
        },
        onInitialize: function() {
            this.control_input.readOnly = true;
            this.wrapper.classList.add('ts-styling-readonly');
        }
    });
});
