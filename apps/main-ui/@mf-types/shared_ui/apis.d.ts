
    export type RemoteKeys = 'shared_ui/Button';
    type PackageType<T> = T extends 'shared_ui/Button' ? typeof import('shared_ui/Button') :any;