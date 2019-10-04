import {
  factory,
  Models,
} from '~/test_helpers';

describe('parent', () => {
  beforeEach(async () => {
  });

  describe('findOrCreate', () => {
    beforeEach(async () => {
      (await Models.parent.count()).should.eql(0);
    });

    it('should create a working association', async () => {
      await factory.createMany('parent', [
        {
          id: 1,
          name: 'parent one',
        },
      ]);
      await factory.createMany('child_one', [
        {
          id: 2,
          name: 'child one',
          parent_id: 1,
        },
      ]);
      const parent = await Models.parent.findOne({
        include: [
          {
            model: Models.child_one,
            required: true,
          }
        ],
        where: {
          id: 1,
        },
      });
      parent.child_ones.length.should.eql(1);
      parent.child_ones[0].id.should.eql(2);
    });

    it('should create child one row', async () => {
      const parent = await Models.parent.findOrCreate({
        include: [
          {
            model: Models.child_one,
            required: true,
          }
        ],
        where: {
          id: 1,
        },
        defaults: {
          name: 'Parent One',
        },
      });
      (await Models.parent.count()).should.eql(1);
      (await Models.child_one.count()).should.eql(1);
    });
  });
});
