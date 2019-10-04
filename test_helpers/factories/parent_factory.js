export default function (factory, Models) {
  factory.define('parent', Models.parent, {
    id: factory.sequence('parent.id', (n) => `${n}`),
    name: factory.sequence('parent.name', (n) => `Parent${n}`),
    create_ts: () => new Date(),
  });
};
