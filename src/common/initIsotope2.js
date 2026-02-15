import Isotope from 'isotope-layout';
import matchesSelector from 'matches-selector';
import imagesLoaded from 'imagesloaded';

const initIsotope = () => {
  // const grids = document.querySelectorAll(`.gallery`);
  const grids2 = document.querySelectorAll('.gallery2');
  let isos = [];

  // const initializeIsotope = (grid, options = {}) => {
  //   const iso = new Isotope(grid, {
  //     itemSelector: '.items',
  //     ...options,
  //   });

  //   imagesLoaded(grid).on('always', () => {
  //     iso.layout();
  //     isos.push(iso);
  //   });
  // };
  const initializeIsotope2 = (grid2, options = {}) => {
    const iso = new Isotope(grid2, {
      itemSelector: '.items',
      ...options,
      masonry: {
        columnWidth: '.width2',
      },
    });

    imagesLoaded(grid2).on('always', () => {
      iso.layout();
      isos.push(iso);
    });
  };

  grids2.forEach((grid) => {
    initializeIsotope2(grid);
  });

  const filtersElem = document.querySelector('.filtering');
  const buttonGroups = document.querySelectorAll('.filtering');

  // Now that all Isotope instances are initialized, you can proceed with event handling
  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!matchesSelector(event.target, 'span')) {
        return;
      }
      const filterValue = event.target.getAttribute('data-filter');

      // Update all Isotope instances
      isos.forEach((iso) => {
        iso.arrange({ filter: filterValue });
      });
    });

    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener('click', (event) => {
        if (!matchesSelector(event.target, 'span')) {
          return;
        }
        buttonGroup.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      });
    };

    buttonGroups.forEach((buttonGroup) => {
      radioButtonGroup(buttonGroup);
    });
  }
};

export default initIsotope;
