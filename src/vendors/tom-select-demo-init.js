document.addEventListener('DOMContentLoaded', () => {
    if (!window.TomSelect) {
        return;
    }

    // Single select
    document.querySelectorAll('.js-select-single').forEach((selectElement) => {
        new TomSelect(selectElement, {
            create: false,
            sortField: {
                field: 'text',
                direction: 'asc'
            }
        });
    });

    // Multi-select (max 3)
    document.querySelectorAll('.js-select-multi').forEach((selectElement) => {
        new TomSelect(selectElement, {
            hidePlaceholder: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: selectElement.getAttribute('placeholder') || 'Pick up to 3 options'
        });
    });

    // Multi-select (no typing/static)
    document.querySelectorAll('.js-select-multi-static').forEach((selectElement) => {
        new TomSelect(selectElement, {
            allowEmptyOption: true,
            create: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: selectElement.getAttribute('placeholder') || 'Pick up to 3 options',
            onInitialize: function() {
                this.control_input.readOnly = true;
            }
        });
    });

    // Tags (create on the fly)
    document.querySelectorAll('.js-select-tags').forEach((inputElement) => {
        new TomSelect(inputElement, {
            create: true,
            persist: false,
            plugins: ['remove_button'],
            placeholder: inputElement.getAttribute('placeholder') || 'Add tags'
        });
    });

    // Custom rendering (with avatars)
    document.querySelectorAll('.js-select-custom').forEach((selectElement) => {
        new TomSelect(selectElement, {
            valueField: 'id',
            labelField: 'name',
            searchField: ['name', 'email'],
            options: [
                {id: 1, name: 'Nikola Tesla', email: 'tesla@example.com', avatar: '../temp/avatars/avatar-32x32@1x.jpg'},
                {id: 2, name: 'Marie Curie', email: 'curie@example.com', avatar: '../temp/avatars/avatar-32x32@1x.jpg'},
                {id: 3, name: 'Albert Einstein', email: 'einstein@example.com', avatar: '../temp/avatars/avatar-32x32@1x.jpg'}
            ],
            render: {
                option: function(data, escape) {
                    return `<div>
                        <div class="flex items-center">
                            <div class="avatar mr-2">
                                <img class="avatar__image" src="${escape(data.avatar)}" alt="${escape(data.name)}">
                            </div>
                            <div>
                                <span class="block font-medium">${escape(data.name)}</span>
                                <span class="block text-gray-500 text-xs">${escape(data.email)}</span>
                            </div>
                        </div>
                    </div>`;
                },
                item: function(data, escape) {
                    return `<div class="flex items-center">
                        <div class="avatar mr-1" style="width: 20px; height: 20px;">
                            <img class="avatar__image" src="${escape(data.avatar)}" alt="${escape(data.name)}">
                        </div>
                        <span>${escape(data.name)}</span>
                    </div>`;
                }
            }
        });
    });

    // Remote Loading
    document.querySelectorAll('.js-select-remote').forEach((selectElement) => {
        new TomSelect(selectElement, {
            valueField: 'url',
            labelField: 'name',
            searchField: 'name',
            // fetch remote data
            load: function(query, callback) {
                var url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query);
                fetch(url)
                    .then(response => response.json())
                    .then(json => {
                        callback(json.items);
                    }).catch(()=>{
                        callback();
                    });
            },
            // custom rendering for remote data
            render: {
                option: function(item, escape) {
                    return `<div>
                        <div class="font-medium">${escape(item.full_name)}</div>
                        <div class="text-xs text-gray-500">${escape(item.description || 'No description')}</div>
                    </div>`;
                },
                item: function(item, escape) {
                    return `<div>${escape(item.full_name)}</div>`;
                }
            }
        });
    });
});
