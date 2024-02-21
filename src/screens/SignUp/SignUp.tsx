import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Template from '../../components/Template/Template';
import {content} from './SignUp.content';
import TopHeader from '../../components/TopHeader/TopHeader';
import {launchImageLibrary} from 'react-native-image-picker';
import InputTextField from '../../components/InputTextField/InputTextField';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import TermsAndConditions from '../../components/TermsAndConditions/TermsAndConditions';
import {RoutesEnum} from '../../navigators/StackNavigator';

const SignUpScreen = ({navigation}: any) => {
  const [image, setImage] = useState<string | undefined>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const defaultImageUploader = require('../../assets/img/default-image-uploader.png');

  const pickImage = React.useCallback(async () => {
    const upload = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    });

    if (upload.didCancel) {
      console.log('User cancelled image picker');
    } else if (upload.errorCode) {
      console.log('Image picker error: ', upload.errorCode);
    } else {
      let imageUri = upload.assets?.[0]?.uri;
      setImage(imageUri);
    }
  }, []);

  return (
    <Template testID={content.testID}>
      <TopHeader />
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonImage} onPress={pickImage}>
            {!image && (
              <Image style={styles.image} source={defaultImageUploader} />
            )}
            {image && <Image style={styles.image} source={{uri: image}} />}
          </TouchableOpacity>
          <InputTextField
            text={name}
            onChangeText={setName}
            placeholder={content.fields.name}
          />
          <InputTextField
            text={email}
            onChangeText={setEmail}
            placeholder={content.fields.email}
          />
          <InputTextField
            text={password}
            onChangeText={setPassword}
            placeholder={content.fields.password}
            password
          />
          <InputTextField
            text={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={content.fields.confirmPassword}
            password
          />
          <View style={styles.termsAndConditionsContainer}>
            <TermsAndConditions navigation={navigation} />
          </View>
          <View style={styles.nextButtonContainer}>
            <PrimaryButton
              onPress={() =>
                navigation.navigate(RoutesEnum.SignUpProfileSelection)
              }
              title={content.buttonText}
            />
          </View>
        </View>
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonImage: {
    width: 230,
    borderRadius: 250,
    marginTop: 70,
    marginBottom: 48,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 230,
  },
  nextButtonContainer: {
    width: '100%',
    marginTop: 48,
  },
  termsAndConditionsContainer: {
    marginTop: 6,
  },
});

export default SignUpScreen;
