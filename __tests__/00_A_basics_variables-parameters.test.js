describe('var, let, const', () => {
  describe('var...', () => {
    function iterator(bool) {
      if (bool) {
        var name = 'Hackages';
      }
      return name;
    }

    it('what do you expect?', () => {
      const actual = iterator(true);
      expect(actual).toEqual('Hackages');
    });
  });

  describe('let...', () => {
    function iterator(bool) {
      let variable;
      if (bool) {
        variable = 'Hackages';
      }
      // you can see that the variable is note defined, that's because of the block scope
      //TODO Make the test pass by declaring the variable before the if
      return variable;
    }

    it('what do you expect?', () => {
      const actual = iterator(false);

      expect(actual).toEqual(undefined);
    });
  });

  describe('const...', () => {
    function iterator(bool) {
      const name = 'hackages';
      if (bool) {
        //here we are trying to reassign a const
        //TODO uncomment the line below to see the effect of const
        /*name = "not hackages";*/
      }
      return name;
    }

    it('what do you expect?', () => {
      const actual = iterator(false);

      expect(actual).toEqual('hackages');
    });
  });
});
