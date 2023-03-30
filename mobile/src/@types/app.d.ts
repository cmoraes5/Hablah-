/// <reference types="nativewind/types" />

// SOLUTION: https://github.com/react-navigation/react-navigation/issues/9741#issuecomment-955947433

export type AppRootParamList = {
    home: undefined;
    chatScreen: undefined;
    config: undefined;
    chatList: undefined;
    // post: { postId: string };
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}