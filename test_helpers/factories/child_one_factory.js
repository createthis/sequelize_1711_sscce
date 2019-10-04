export default function (factory, Models) {
  factory.define('child_one', Models.child_one, {
    id: factory.sequence('child_one.id', (n) => `${n}`),
    name: factory.sequence('child_one.name', (n) => `Child One${n}`),
    create_ts: () => new Date(),
  });
};
